import ClientSliderOne from "@/components/slider/ClientSliderOne";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home1_Section7() {
  // const [Active, setActive] = useState(1);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <section className="clients-section pull-up">
        <div className="bg bg-pattern-3" />
        <div className="auto-container">
          <div className="default-tabs tabs-box">
          </div>
          <div className="sponsors-outer" data-aos="fade-right">
            <ClientSliderOne />
          </div>
        </div>
      </section>
    </>
  );
}
