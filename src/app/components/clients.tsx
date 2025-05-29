import Image from "next/image";

export default function Clients() {
  return (
    <section className="section clients">
      <div className="container w-full dir-col align-center">
        <div className="content">
          <h3>Our Trusted Clients</h3>
          <div className="client-logos-container">
            <Image
              src="/images/clients/macafe.png"
              width={168}
              height={78}
              alt="macafe client logo"
            />
            <Image
              src="/images/clients/al-fateh.png"
              width={230}
              height={64}
              alt="al-fateh client logo"
            />
            <Image
              src="/images/clients/jugnu.png"
              width={196}
              height={60}
              alt="jugnu client logo"
            />
            <Image
              src="/images/clients/wateen.png"
              width={209}
              height={98}
              alt="wateen client logo"
            />
            <Image
              src="/images/clients/enem.png"
              width={86}
              height={110}
              alt="enem client logo"
            />
            <Image
              src="/images/clients/ecs.png"
              width={110}
              height={110}
              alt="ecs client logo"
            />
            <Image
              src="/images/clients/baby-planet.png"
              width={196}
              height={60}
              alt="baby-planet client logo"
            />
            <Image
              src="/images/clients/mcdonalds.png"
              width={92}
              height={92}
              alt="mcdonalds client logo"
            />
            <Image
              src="/images/clients/philips.png"
              width={193}
              height={43}
              alt="philips client logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
