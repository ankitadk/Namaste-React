const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact Us Page</h1>
      <form className="p-4 m-4">
        <input
          className="p-2 m-2 border border-blak rounded-lg"
          placeholder="Name"
        />
        <input
          className="p-2 m-2 border border-blak rounded-lg"
          placeholder="Message"
        />
        <button className="p-2 m-2 border border-blak bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
