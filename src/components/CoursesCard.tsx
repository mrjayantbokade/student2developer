
import { MagicCard } from "@/components/ui/magic-card.tsx";
import PinkButton from "@/components/PinkButton.tsx";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import TagButton from "@/components/TagButton.tsx";

interface CoursesCardProps {
    courseImage: string;
    courseTittle: string;
    tags?: string[]; // Optional tags
    mainFeatures?: string[];
    price?: number; // Optional list of main features
}

const CoursesCard = ({ courseImage, courseTittle, tags = [], mainFeatures = [], price}: CoursesCardProps) => {
    return (
        <MagicCard
            className="h-[550px] w-[340px] shadow-sm shadow-gray-50/20 flex-col overflow-hidden flex-shrink-0 rounded-xl bg-backgroundBlackOG relative"
        >
            <div className="text-grayText flex flex-col  w-full h-full">
                {/* Course Image */}
                <img className="w-full h-40 object-cover" src={courseImage} alt="course image" />

                <div className="px-6 py-4">
                    {/* Dynamic Tags */}
                    <div className="flex flex-row gap-2 mb-2">
                        {tags.map((tag, index) => (
                            <TagButton key={index} textprop={tag} />
                        ))}
                    </div>

                    {/* Course Title */}
                    <h1 className="text-white/80 font-semibold text-3xl h-20 py-1">{courseTittle}</h1>

                    {/* Dynamic Features */}
                    <div className="flex flex-col gap-2 mt-2">
                        {mainFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-row gap-2 items-center">
                                <Icon path={mdiCheckCircleOutline} size={0.8} className="text-green-600" />
                                <p className="text-md">{feature}</p>
                            </div>
                        ))}
                    </div>

                    {/* Price */}
                    <div className="py-4 flex justify-start w-full">
                        <span className=" font-inter font-semibold text-2xl">₹ {price}/-</span>
                    </div>
                </div>
            </div>

            {/* View Course Button */}
                <div className="w-full flex justify-center absolute -bottom-6  ">
                    <PinkButton buttonText="View Course"/>
                </div>
        </MagicCard>
    );
};

export default CoursesCard;
