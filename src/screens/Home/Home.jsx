import CustomeInput from "../../components/CustomeInput/CustomeInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
  const [isloading, setIsloading] = useState(false);
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleClick = () => {
    if (inputData === "") {
      alert("please Enter Keyword");
      return;
    }
    setIsloading(true);
    setTimeout(() => {
        navigate("/outline")
        setIsloading(false);
    }, 2000);
  };

  console.log(inputData);

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div>
        <h2>Human Like Article</h2>
        <CustomeInput
          labelTitle={"Enter your Keyword"}
          labelClass="my-2"
          inputClass="p-2 "
          inputPlaceholder="Enter your Right keyword"
          handleChnage={handleChange}
        />
        <CustomButton
          btnClass={
            "w-100 p-2 bg-primary border border border-0 outline rounded-1 text-white"
          }
          handleClick={handleClick}
        >
          {isloading ? (
            <div class="spinner-border textsuccess" role="status">
          </div>
          ) : (
            "Generate Outline"
          )}
        </CustomButton>
      </div>
    </div>
  );
};

export default Home;
