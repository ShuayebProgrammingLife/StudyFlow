// import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="max-w-[700px] mx-auto space-y-2 text-center mb-10 ">
  <h2 className="font-bold text-3xl">{title}</h2>
  <p className="text-lg text-slate-500">
    {subtitle}
  </p>
</div>

  );
};

export default SectionHeader;