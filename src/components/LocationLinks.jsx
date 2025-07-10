import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LocationLinks = () => {
  const { t } = useTranslation();

  const locations = [
    { name: "Toronto", href: "/web-design-toronto" },
    { name: "Kitchener", href: "/web-design-kitchener" },
    { name: "Vancouver", href: "/web-design-vancouver" },
    { name: "Montréal", href: "/web-design-montreal" },
    { name: "Calgary", href: "/web-design-calgary" },
    { name: "Ottawa", href: "/web-design-ottawa" },
    { name: "Edmonton", href: "/web-design-edmonton" },
    { name: "Halifax", href: "/web-design-halifax" },
  ];

  return (
    <div className="mt-16 text-center">
      <h3 className="text-white text-md font-semibold mb-4">
        {t("footer.locationsHeading", "Web Design Services In:")}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {locations.map((location) => (
          <a
            key={location.name}
            href={location.href}
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200 group"
          >
            <FaMapMarkerAlt className="text-gray-500 group-hover:text-white transition" />
            <span>{location.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LocationLinks;