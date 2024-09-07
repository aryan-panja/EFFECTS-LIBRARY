import { InfiniteSlider } from '@/components/core/infinite-slider';
import test1 from "@/assets/brand logo/1.webp";
import test2 from "@/assets/brand logo/2.webp";
import test3 from "@/assets/brand logo/3.webp";
import test4 from "@/assets/brand logo/4.webp";
import test5 from "@/assets/brand logo/5.webp";
import test6 from "@/assets/brand logo/6.webp";
import test7 from "@/assets/brand logo/7.webp";
import test8 from "@/assets/brand logo/8.webp";
import test9 from "@/assets/brand logo/9.webp";
import test10 from "@/assets/brand logo/10.webp";

export function HorizontalAutoScroll() {

    const images = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10];

    return (
        <div className='flex'>
            <div className="flex flex-col gap-y-10 w-4/6">
                <InfiniteSlider gap={24} reverse>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="test" className="w-40 h-40" />
                    ))}
                </InfiniteSlider>

                <InfiniteSlider gap={24}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="test" className="w-40 h-40" />
                    ))}
                </InfiniteSlider>
            </div>

            <div className='flex w-2/6 gap-x-5 h-[700px]'>
                <InfiniteSlider gap={24} direction={"vertical"}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="test" className="w-40 h-40" />
                    ))}
                </InfiniteSlider>

                <InfiniteSlider gap={24} direction={"vertical"} reverse>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="test" className="w-40 h-40" />
                    ))}
                </InfiniteSlider>
            </div>
        </div>

    );
}
