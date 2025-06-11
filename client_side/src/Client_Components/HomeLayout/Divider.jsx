const Divider = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: "#fdb913" }}
    >
      <h1
        className="text-6xl font-bebas text-bold mt-15 mb-10"
        style={{ letterSpacing: 1 }}
      >
        Testimonials
      </h1>
      <div className="font-pt-sans-narrow text-2xl mb-5">
        <h2 className="mb-10">
          The service provided by Wild Tracks Nepal met my expectations and the
          experience was fabulous.
        </h2>

        <h2 className="mb-10">
          The staff of Wild Tracks Nepal were very supportive and always ready
          to help us in any way possible.
        </h2>

        <h2 className="mb-10">
          The staff of Wild Tracks Nepal were very supportive and always ready
          to help us in any way possible.
        </h2>
      </div>
    </div>
  );
};

export default Divider;
