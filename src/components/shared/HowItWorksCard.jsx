

const HowItWorksCard = ({ step, index }) => {
  return (
    <div
      key={step.steps}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="font-semibold text-3xl text-[#0e7c66]">0{index + 1}</h2>
      <h3 className="text-xl font-semibold">
        {/* Step {step.steps}: {step.title} */}
        {/* Step {index + 1}: {step.title} */}
        {step.title}
      </h3>
      <p>{step.description}</p>
    </div>
  );
};

export default HowItWorksCard;