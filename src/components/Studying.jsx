import { GoArchive, GoGoal, GoTasklist } from "react-icons/go";
import SectionHeader from "./shared/sectionHeader";
// import Featured from "./shared/Featured";
import FeaturedCard from "./shared/FeaturedCard";

const Studying = () => {
  return (
    <section className="container mx-auto text-center py-[75px] space-y-10">
      <SectionHeader
        title={"Studying without a System is Exhausting"}
        subtitle={"Learn how to study effectively without getting distracted"}
      />

      <div className="grid grid-cols-3 gap-4">
        <FeaturedCard
          icon={<GoGoal className="mx-auto text-[#0e7c66] size-7" />}
          title="Set Your Goals"
          description="Define your study objectives and create a roadmap to achieve them."
        />

        <FeaturedCard
          icon={<GoArchive className="mx-auto text-[#0e7c66] size-7" />}
          title="Track Your Progress"
          description="Monitor your study sessions and see how far you've come."
        />


        <FeaturedCard
          icon={<GoTasklist className="mx-auto text-[#0e7c66] size-7" />}
          title="Stay Motivated"
          description="Receive reminders and encouragement to keep you on track."
        />
      </div>
    </section>
  );
};

export default Studying;
