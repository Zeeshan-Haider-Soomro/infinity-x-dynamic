const CustomHeading = ({ 
  firstText, 
  secondText, 
  firstColor = "#5C0E6E", 
  secondColor = "#A95C9C", 
  textSize = "text-3xl",
  align = "text-center"
}) => {
  return (
    <h2 data-aos="fade-up" className={`${textSize} ${align} font-bold`}>
      <span style={{ color: firstColor }}>{firstText}</span>{" "}
      <span style={{ color: secondColor }}>{secondText}</span>
    </h2>
  );
};

export default CustomHeading;

          // <CustomHeading
          //   firstText="OUR"
          //   secondText="ACHIEVEMENTS"
          //   firstColor="#fff"
          //   secondColor="#D977C8"
          //   textSize="text-4xl md:text-6xl font-bold p-5"
          //   align="text-center"
          // />