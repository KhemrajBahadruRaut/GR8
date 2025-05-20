import { useRef } from "react";

const LesConnect = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div className="flex justify-center ">
      <button
        className="px-4 py-2 rounded md:px-6 md:py-3 rounded-xl shadow-lg backdrop-blur-sm bg-white/40 text-white font-medium hover:bg-white/50 transition-all duration-300"
        onClick={openModal}
      >
        Let’s Connect
      </button>

      <dialog
        id="my_modal_3"
        className="modal"
        ref={modalRef}
        aria-labelledby="contact-form-title"
        
      >
        <div className="modal-box bg-white text-black p-6 rounded-lg shadow-xl w-full max-w-md">
          <form method="dialog" className="absolute top-2 right-2">
            <button className="btn btn-sm btn-circle btn-ghost text-xl">
              ✕
            </button>
          </form>

          <h2
            id="contact-form-title"
            className="text-xl font-semibold text-center mb-4"
            style={{ fontFamily: 'Impact' }}
          >
            Get the right answers
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input input-bordered w-full"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                placeholder="How can we help?"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-neutral w-full">
              Send
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default LesConnect;
