import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Message = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE, // Replace with your Service ID
        import.meta.env.VITE_TEMPLATE, // Replace with your Template ID
        e.target,
        import.meta.env.VITE_PUBLIC // Replace with your Public Key
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire("Failed to send the message.");
        }
      );

    e.target.reset();
  };
  console.log(import.meta.env.VITE_TEMPLATE, import.meta.env.VITE_PUBLIC);
  
  return (
<div>
<form onSubmit={sendEmail} className="space-y-4">
  <div className="form-control">
    <input
      type="text"
      name="from_name"
      placeholder="Your Name"
      className="input w-full"
      required
    />
  </div>
  <div className="form-control">
    <input
      type="email"
      name="from_email"
      placeholder="Your Email"
      className="input w-full"
      required
    />
  </div>
  <div className="form-control">
    <textarea
      name="message"
      placeholder="Type your Message..."
      className="textarea w-full"
      required
    />
  </div>
  <div>
    <input
      className="btn text-white hover:bg-orange-600 bg-orange-500"
      type="submit"
      value="Submit"
    />
  </div>
</form>
</div>

  );
};

export default Message;
