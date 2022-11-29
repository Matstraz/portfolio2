import React from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
    // eslint-disable-next-line
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map(
      (icon) =>
        renderSimpleIcon({
          icon,
          size: 100,
          aProps: {
            onClick: (e) => e.preventDefault(),
          },
        }),
      console.log(icons)
    );
  }

  return <p>Loading</p>;
};

const slugs = [
  "bootstrap",
  "css3",
  "git",
  "html5",
  "javascript",
  "mysql",
  "react",
  "tailwindcss",
  "trello",
  "typescript",
  "visualstudiocode",
  "github",
  "netlify",
  "npm",
  "canva",
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return <Cloud>{icons}</Cloud>;
};

export default DynamicIconCloud;
