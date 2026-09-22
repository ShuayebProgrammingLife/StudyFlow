import SectionHeader from "./shared/sectionHeader";
import HowItWorksCard from "./shared/HowItWorksCard"; 

const HowItWorks = () => {
  const steps = [
    {
      // steps: 1,
      title: "Set Your Goals",
      description:
        "Define your study objectives and create a roadmap to achieve them.",
    },
    {
      // steps: 2,
      title: "Track Your Progress",
      description: "Monitor your study sessions and see how far you've come.",
    },
    {
      // steps: 3,
      title: "Stay Motivated",
      description: "Receive reminders and encouragement to keep you on track.",
    },
  ];
  return (
    <div className="container mx-auto text-center py-[75px] space-y-10">
      <SectionHeader title={"How It Works"} />

      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <HowItWorksCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
