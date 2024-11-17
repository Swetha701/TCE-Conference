

import React, { useState, useEffect, useCallback, useRef } from "react";

import { usePathname, useRouter } from "next/navigation";


  
const ConferenceDetails: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const updateNavbarHeight = useCallback(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, [updateNavbarHeight]);

  const scrollToSection = useCallback(
    (id: string) => {
      console.log("pathname", pathname);
      const isCommitteePage = pathname === "/committee";

      const performScroll = () => {
        const section = document.getElementById(id);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            sectionPosition + window.pageYOffset - navbarHeight;

          setIsMenuOpen(false);

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 300); // Increased delay to allow for smoother animation
        } else {
          console.error(`Section with id "${id}" not found`);
        }
      };

      if (isCommitteePage) {
        router.push("/");
        // Use a timeout to wait for the navigation to complete
        setTimeout(() => {
          performScroll();
        }, 100);
      } else {
        performScroll();
      }
    },
    [navbarHeight]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
      },
    },
  };

  return (
    <div className="p-6 md:p-8 rounded-lg">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Participation and Delegate Fees
      </h2>
      <button
          onClick={() => {
            scrollToSection("payment");
          }}
          className="bg-primary-accent text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 border"
        >
          Go to Payment
        </button>
      {/* Indian Authors Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Indian Authors</h3>
        <table className="min-w-full text-left text-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-2 px-4">Categories</th>
              <th className="py-2 px-4">Fees (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Research Scholar/Academicians/Student</td>
              <td className="py-2 px-4">Rs. 9000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4">Industry and Others</td>
              <td className="py-2 px-4">Rs. 12000</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Presentation Only</td>
              <td className="py-2 px-4">Rs. 3000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4">Conference Kit</td>
              <td className="py-2 px-4">Rs. 2000</td>
            </tr>
            <tr>
              <td className="py-2 px-4">One Day Excursion</td>
              <td className="py-2 px-4">NIL</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Line Divider */}
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Foreign Authors Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Foreign Authors</h3>
        <table className="min-w-full text-left text-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-2 px-4">Categories</th>
              <th className="py-2 px-4">Fees (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Academic/Research Scholar/Student</td>
              <td className="py-2 px-4">$250 (Rs. 21000)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4">Non-IEEE Members</td>
              <td className="py-2 px-4">Rs. 10000</td>
            </tr>
            <tr>
              <td className="py-2 px-4">IEEE Members</td>
              <td className="py-2 px-4">$225 (Rs. 19000)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pre-Conference Workshops Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Pre-Conference Workshops</h3>
        <table className="min-w-full text-left text-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-2 px-4">Participation</th>
              <th className="py-2 px-4">Fees (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">Participation</td>
              <td className="py-2 px-4">Rs. 9000</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4">Participation + Conference Kit</td>
              <td className="py-2 px-4">Rs. 2000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Other Details */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Other Details</h3>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <strong>Submission Link:</strong> <a href="https://link.com/SCOPE2025" className="text-blue-600 underline">SCOPE2025</a>
          </li>
          <li className="mb-2">
            <strong>Online Payment Link:</strong> <a href="#" className="text-blue-600 underline">Payment Link</a>
          </li>
          <li className="mb-2">
            <strong>Registration Link:</strong> <a href="#" className="text-blue-600 underline">Registration Link</a>
          </li>
          <li className="mb-2">
            <strong>QR Code:</strong> <span>QR CODE HERE</span>
          </li>
          <li className="mb-2">
            <strong>Location:</strong> Conference Venue
          </li>
          <li className="mb-2">
            <strong>Distance from Airport:</strong> 8.7km (18 mins) via Airport Rd
          </li>
          <li className="mb-2">
            <strong>Distance from Railway Station:</strong> 9.8km (25 mins) via Thiruparankundram Rd
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <p><strong>Dr. C. Deisy</strong>, Professor & Head, Information Technology</p>
        <p>E-Mail: <a href="mailto:cdcse@tce.edu" className="text-blue-600 underline">cdcse@tce.edu</a></p>
        <p>Contact Number: <a href="tel:+919994135951" className="text-blue-600 underline">+91 99941 35951</a></p>
        <p>Conference Website: <a href="#" className="text-blue-600 underline">Visit Website</a></p>
      </div>
    </div>
  );
};

export default ConferenceDetails;
