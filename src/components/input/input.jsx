function Input({ onChangeInput, value, placeholder, label, id }) {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="h-[40px] px-2 w-full border-b-2 border-neutral-950 outline-0"
          value={value}
          onChange={(e) => {
            onChangeInput(e.target.value);
          }}
        />
      </div>
    );
  }
  
  export default Input;