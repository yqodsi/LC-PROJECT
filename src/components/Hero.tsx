import { useRef } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function Hero() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroSection = useRef(null);

  return (
    <div className="hero min-h-screen bg-base-200" ref={heroSection}>
      <div className="hero-content flex-col lg:flex-row">
        <span className="min-w-300px">CHE SIAMO</span>
        <div>
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim vero
            ipsa, architecto dicta porro minus facilis culpa error hic aliquam
            sequi. Natus veniam iusto atque veritatis accusantium provident fuga
            nisi culpa eligendi assumenda quos doloribus reprehenderit
            molestias, dolorum reiciendis eius. Reprehenderit ex veritatis ea
            temporibus incidunt earum at voluptate ab culpa repellendus. Modi
            saepe recusandae debitis quae impedit nisi fugiat voluptatum neque
            aliquid voluptas, porro non necessitatibus! Fugiat, nam quasi
            temporibus aperiam ea veritatis nulla a velit optio, ad
            exercitationem nisi molestiae iure possimus? Nemo, perspiciatis, eum
            animi aut alias facere accusantium molestiae, accusamus maxime qui
            nobis repellendus quia vel.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
