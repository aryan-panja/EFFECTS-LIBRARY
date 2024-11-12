import { Star } from "lucide-react";

export const Comments = () => {

  const data = [
    { stars: 5, text: "This product exceeded all my expectations! The quality, performance, and attention to detail were outstanding. I would recommend it without hesitation." },
    
    { stars: 4, text: "A solid product overall. While it did have a few minor flaws, they were not enough to overshadow its positive aspects. It’s worth the price, and most people will be satisfied with its performance." },
    
    { stars: 3, text: "The product does its job, but there is nothing remarkable about it. It feels like a fairly standard offering, which neither excels nor fails miserably. If you're not expecting much, it might meet your needs." },
    
    { stars: 2, text: "I was disappointed with this product. The performance wasn’t up to par, and there were a few significant shortcomings that made it frustrating to use. The quality of materials didn’t match the price tag, and I believe there are better options available." },
    
    { stars: 1, text: "This product was a complete letdown. It broke after a few uses, and even when it worked, it didn’t perform as expected. I would not recommend this to anyone. It’s poorly made, and customer support was unhelpful." },
    
    { stars: 4, text: "A pretty good product overall. It delivers in most areas, but there are a few small things that could be improved. The design is sleek, and it functions well. For most people, this will be more than enough, but if you're looking for perfection, you might want to explore other options." },
    
    { stars: 3, text: "It’s a middle-of-the-road product. The quality is acceptable, and it functions as advertised, but there’s nothing special here. It gets the job done, but you may find better options at a similar price point." },
    
    { stars: 5, text: "An absolutely fantastic product! Everything from the build quality to the performance exceeded my expectations. I’ve used it extensively for a few months now, and it has held up wonderfully. I would definitely purchase this again." },
    
    { stars: 2, text: "This product did not meet my expectations. The quality feels lacking, and while it works, the performance is inconsistent at best. There are better alternatives for the price, and I wouldn't recommend this unless there’s no other option." },
    
    { stars: 1, text: "A terrible purchase. The product is faulty and poorly designed, and it didn’t last long before breaking. I would strongly advise against buying this as it’s simply not worth the frustration." }
  ];
  
    

  return (
    <div className="columns-3 gap-4">
      {data.map((review, index) => {
        return (
          <Review key={index} data={review} />
        );
      })}
    </div>
  );
};

const Review = ({ data }) => {
  return (
    <div
      className="text-white p-4 mb-4 break-inside-avoid break-words border-[2px] border-[#E8D02C] rounded-[20px]"
//       style={{
//         border: 5px solid #E8D02C;
//         border- radius: 28px;
// }}
    >
      <h1 className="flex gap-x-3">
        {
          Array.from({ length: data.stars }).map((_, index) => {
            return (
              <Star key={index} className="fill-white" />
            );
          })
        }
      </h1>
      <p>{data.text}</p>
    </div >
  );
};
