import { Link } from "react-router-dom";
// import input from "../components/input/input";
import { useState } from "react";
import { useEffect } from "react";
function Register() {

  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, fullname, phone, password, confirmPassword } = formData;
    if (!username || username.length < 3) {
      alert('Please enter a valid username with at least 3 characters');
      return;
    }

    // Validate fullname field
    if (!fullname || !/^[a-zA-Z ]+$/.test(fullname)) {
      alert('Please enter a valid full name with only letters and spaces');
      return;
    }

    // Validate phone field
    if (!phone || phone.length < 10 || !/^\d+$/.test(phone)) {
      alert('Please enter a valid phone number with at least 10 digits');
      return;
    }

    // Validate password fields
    if (!password || password.length < 8 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g.test(password)) {
      alert('Please enter a valid password with at least 8 characters, 1 lowercase, 1 uppercase, and 1 special character');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Submit form data
    alert('Registration successful!');

    localStorage.setItem('formData', JSON.stringify(formData));

    // Clear form data
    setFormData({
      username: '',
      fullname: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
  }

  useEffect(() => {
    // Load saved form data from local storage
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData !== null) {
      setFormData(savedData);
    }
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] overflow-auto">
        <div className="w-[500px] bg-gray-200 rounded-lg">
          <div className="p-10">
            <h3 className="text-3xl text-center">Register </h3>
            <div className="my-5">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col	gap-y-[20px]">
                  <div>
                    <h2>Username</h2>
                    <input className="w-full" name="username" value={formData.username} onChange={handleChange} required />
                  </div>
                  <div>
                    <h2>Fullname</h2>
                    <input className="w-full" name="fullname" value={formData.fullname} onChange={handleChange} required />
                  </div>
                  <div>
                    <h2>Phone</h2>
                    <input className="w-full" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div>
                    <h2>Password</h2>
                    <input className="w-full" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                  <div>
                    <h2>Password Confirm</h2>
                    <input className="w-full" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                  </div>
                  <button className="p-3 w-full bg-[#fcba03]">Dang ky</button>
                </div>
              </form>


            </div>
            <p>
              Neu ban co tai khoan? hay <Link to="/sign-in">Dang nhap</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;