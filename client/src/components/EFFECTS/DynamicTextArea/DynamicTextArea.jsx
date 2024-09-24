import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils';
import React, { useState } from 'react'

export const DynamicTextArea = ({ targetCharacter = '', targetWord = '', className }) => {
    const [text, setText] = useState('')

    const totalCharacters = text.length;
  
    const totalWords = text.trim() === '' ? 0 : text.trim().split(/\s+/).length; 
  
    const totalUniqueCharacters = new Set(text).size;
  
    // Calculate total special symbols
    const totalSpecialSymbols = (text.match(/[^a-zA-Z0-9]/g) || []).length;
  
    // Count occurrences of targetCharacter
    const totalTargetCharacter = targetCharacter ? (text.match(new RegExp(targetCharacter, 'g')) || []).length : 0;
  
    // Count occurrences of targetWord
    const totalTargetWord = targetWord ? (text.match(new RegExp(`\\b${targetWord}\\b`, 'g')) || []).length : 0;
  
    return (
      <div className={cn('flex flex-col items-center justify-center w-full', className)}>
        <Textarea 
          className="w-1/2" 
          onChange={(e) => setText(e.target.value)} 
          value={text}
        />
  
        <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-5 text-sm font-bold'>
          <p>Total Characters: {totalCharacters}</p>
          <p>Total Words: {totalWords}</p>
          <p>Total Unique Characters: {totalUniqueCharacters}</p>
          <p>Total Special Symbols: {totalSpecialSymbols}</p>
          {targetCharacter.length>0 && <p>Total '{targetCharacter}' Occurrences: {totalTargetCharacter}</p>}
          {targetWord.length>0 && <p>Total '{targetWord}' Occurrences: {totalTargetWord}</p>}
        </div>
      </div>
    )
  }
  