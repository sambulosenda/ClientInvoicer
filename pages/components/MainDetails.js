export default function MainDetails({ name, address }) {
  return (
    <div>
      {/* Your details */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-xl uppercase">{name}</h2>
        <p>{address}</p>
      </section>
      {/* End of your details */}
    </div>
  );
}
