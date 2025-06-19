// import Image from "../components/-image";
import Image from "next/image";

interface ClientsProps {
  showHeader?: boolean;
}

export default function Clients({ showHeader }: ClientsProps) {
  return (
    <section className="section clients">
      <div className="container w-full dir-col align-center">
        <div className="content">
          {showHeader && <h4>Our Trusted Clients</h4>}
          <div className="row">
            <div className="client-logos-container">
              <Image
                src="/images/clients/macafe.png"
                width={168}
                height={78}
                alt="macafe client logo"
                unoptimized={true}
              />
              <Image
                src="/images/clients/al-fateh.png"
                width={230}
                height={64}
                alt="al-fateh client logo"
                unoptimized={true}
              />
              <Image
                src="/images/clients/jugnu.png"
                unoptimized={true}
                width={196}
                height={60}
                alt="jugnu client logo"
              />
              <Image
                src="/images/clients/wateen.png"
                width={209}
                height={98}
                alt="wateen client logo"
                unoptimized={true}
              />
              <Image
                src="/images/clients/enem.png"
                unoptimized={true}
                width={86}
                height={110}
                alt="enem client logo"
              />
              <Image
                src="/images/clients/ecs.png"
                unoptimized={true}
                width={110}
                height={110}
                alt="ecs client logo"
              />
              <Image
                src="/images/clients/baby-planet.png"
                unoptimized={true}
                width={196}
                height={60}
                alt="baby-planet client logo"
              />
              <Image
                src="/images/clients/mcdonalds.png"
                unoptimized={true}
                width={92}
                height={92}
                alt="mcdonalds client logo"
              />
              <Image
                src="/images/clients/philips.png"
                unoptimized={true}
                width={193}
                height={43}
                alt="philips client logo"
              />
            </div>

            <div className="client-logos-container">
              <Image
                src="/images/clients/macafe.png"
                unoptimized={true}
                width={168}
                height={78}
                alt="macafe client logo"
              />
              <Image
                src="/images/clients/al-fateh.png"
                unoptimized={true}
                width={230}
                height={64}
                alt="al-fateh client logo"
              />
              <Image
                src="/images/clients/jugnu.png"
                unoptimized={true}
                width={196}
                height={60}
                alt="jugnu client logo"
              />
              <Image
                src="/images/clients/wateen.png"
                unoptimized={true}
                width={209}
                height={98}
                alt="wateen client logo"
              />
              <Image
                src="/images/clients/enem.png"
                unoptimized={true}
                width={86}
                height={110}
                alt="enem client logo"
              />
              <Image
                src="/images/clients/ecs.png"
                unoptimized={true}
                width={110}
                height={110}
                alt="ecs client logo"
              />
              <Image
                src="/images/clients/baby-planet.png"
                unoptimized={true}
                width={196}
                height={60}
                alt="baby-planet client logo"
              />
              <Image
                src="/images/clients/mcdonalds.png"
                unoptimized={true}
                width={92}
                height={92}
                alt="mcdonalds client logo"
              />
              <Image
                src="/images/clients/philips.png"
                unoptimized={true}
                width={193}
                height={43}
                alt="philips client logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
