import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import WebFont from 'webfontloader';
import { ChevronDown, Type, Palette, Layout, Upload } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Fonts = () => {
    const [message, setMessage] = useState('');
    const [font, setFont] = useState('');
    const [textColor, setTextColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#FFF9C6');
    const [selectedImage, setSelectedImage] = useState(null)
    const [messageImage, setMessageImage] = useState('');
    const [textColorImage, setTextColorImage] = useState('#000000');

    useEffect(() => {
        if (font) {
            WebFont.load({
                google: {
                    families: [font],
                },
            });
        }
    }, [font]);

    const handleTextChange = (e) => setMessage(e.target.value);
    const handleFontInput = (e) => setFont(e.target.value);
    const handleTextColorChange = (color) => setTextColor(color.hex);
    const handleBgColorChange = (color) => setBgColor(color.hex);
    const handleTextColorChangeImage = (color) => setTextColorImage(color.hex);

    return (
        <div className="flex max-md:flex-col h-screen bg-gray-100 dark:bg-gray-900 overflow-auto">
            <div className="w-9/12 max-md:w-full p-8 overflow-auto sticky h-screen" style={{ backgroundColor: bgColor }}>
                <Card className="w-full h-full bg-transparent shadow-none border-none">
                    <CardContent className="p-6">
                        <h1
                            className="text-4xl font-bold mb-10 text-center"
                            style={{ fontFamily: font, color: textColor }}
                        >
                            Your Text Preview
                        </h1>
                        <p
                            className="text-xl leading-relaxed whitespace-pre-wrap break-words"
                            style={{ fontFamily: font, color: textColor }}
                        >
                            {message || "Your styled text will appear here..."}
                        </p>

                        {/* Container for Image and Text Overlay */}
                        {selectedImage && (
                            <div className="mt-6 relative flex items-center justify-center">
                                {/* Image */}
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Uploaded Image"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Overlay Text */}
                                <h1
                                    className="absolute top-1/2 text-4xl font-bold text-white"
                                    style={{
                                        fontFamily: font,
                                        color: textColorImage, // Use user-selected color for text
                                    }}
                                >
                                    {messageImage || "Overlay Text"}
                                </h1>
                            </div>
                        )}
                    </CardContent>

                </Card>
            </div>

            <div className="w-3/12 sticky h-screen max-md:w-full z-10 bg-white dark:bg-gray-800 p-6 overflow-y-auto shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Text Styler</h2>

                <Textarea
                    placeholder="Type your message here..."
                    className="mb-6"
                    rows={4}
                    onChange={handleTextChange}
                    value={message}
                />

                <Accordion type="multiple" collapsible className="w-full space-y-4">
                    <AccordionItem value="font">
                        <AccordionTrigger className="text-lg font-semibold [&[data-state=open]>svg]:rotate-0">
                            <Type className="w-5 h-5 mr-2" />
                            Font
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="mt-2 ml-2 mr-2">
                                <Input
                                    type="text"
                                    placeholder="Enter font name..."
                                    onChange={handleFontInput}
                                    value={font}
                                />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="text-color">
                        <AccordionTrigger className="text-lg font-semibold [&[data-state=open]>svg]:rotate-0">
                            <Palette className="w-5 h-5 mr-2" />
                            Text Color
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="mt-2 flex justify-center">
                                <ChromePicker color={textColor} onChange={handleTextColorChange} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="bg-color">
                        <AccordionTrigger className="text-lg font-semibold [&[data-state=open]>svg]:rotate-0">
                            <Layout className="w-5 h-5 mr-2" />
                            Background Color
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="mt-2 flex justify-center">
                                <ChromePicker color={bgColor} onChange={handleBgColorChange} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="image-upload">
                        <AccordionTrigger className="text-lg font-semibold [&[data-state=open]>svg]:rotate-0">
                            <Upload className="w-5 h-5 mr-2" />
                            Upload Image
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="mt-2 flex flex-col items-center justify-center">
                                {/* Hidden input for image upload */}
                                <input
                                    type="file"
                                    name="myImage"
                                    accept="image/*"
                                    style={{ display: 'none' }} // Hide the input field
                                    id="imageUpload"
                                    onChange={(event) => {
                                        const file = event.target.files[0];
                                        if (file) {
                                            const fileType = file.type.split('/')[0];
                                            if (fileType === 'image') {
                                                setSelectedImage(file); // Set the selected image
                                            } else {
                                                alert("Please select a valid image file.");
                                            }
                                        }
                                    }}
                                />
                                <Textarea
                                    placeholder="Type your message here..."
                                    className="mb-6"
                                    rows={4}
                                    onChange={(e) => (setMessageImage(e.target.value))}
                                    value={messageImage}
                                />
                                <Button
                                    onClick={() => {
                                        const fileInput = document.getElementById('imageUpload');
                                        if (fileInput) {
                                            fileInput.click(); // Trigger the hidden input click
                                        }
                                    }}
                                    className="mt-4"
                                >
                                    Upload Image
                                </Button>
                                {selectedImage && (
                                    <>
                                        <Button className="mt-4" onClick={() => setSelectedImage(null)}>
                                            Remove Image
                                        </Button>
                                        <div className="mt-2">
                                            <p className="text-gray-500 text-sm">Selected: {selectedImage.name}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="mt-2 flex justify-center">
                                <ChromePicker color={textColorImage} onChange={handleTextColorChangeImage} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default Fonts;