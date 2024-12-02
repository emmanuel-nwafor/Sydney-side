function Newsletter() {
  return (
    <>
      <div className="h-[30vh] flex items-centerjustify-evenly ">
        <form action="">
          <h1>
            Subscribe To Our News Letter To Get Updated On{" "}
            <span>New Arrivals</span>
          </h1>
          <input type="text" required />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
}
export default Newsletter;
