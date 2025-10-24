const SkillsBanner = () => {
  const skills = [
    "Design",
    "Photographer",
    "XR Developer",
    "Videographer",
    "Manic",
  ];
  let text = "";

  for (let i = 0; i < skills.length; i++) {
    text += skills[i];
    if (i < skills.length - 1) {
      text += " • ";
    }
  }

  return (
    <div className="w-full flex justify-around border-y-4 border-stone-950">
      <h1 className="text-[2rem] font-source_san_3 font-bold ">{text}</h1>
    </div>
  );
};

export default SkillsBanner;
