import React, { useContext, useEffect } from "react";
import { DataContext } from "./Data";
import ItemContainer from "./ItemContainer";

function Shop() {
  let {data,array,setArray} = useContext(DataContext);
  useEffect(() => {
    setArray(data);
  }, []);

  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  
  },[])
  
  function handleClick(e) {
    let mobileFilter = data.filter((item) => {
      if (e.target.id === item.type) {
        return true;
      }
    });
    setArray(mobileFilter);
  }

  function handleClickAll() {
    setArray(data);
  }

  console.log("array posle " + array);

  return (
    <div className="shopContainer">
      <div className="filter">
        <h1>Filter</h1>
        <div className="formDiv">
          <form>
            <div>
              <label for="mobile">Show All </label>
              <input
                type="radio"
                id="all"
                name="rad"
                onClick={handleClickAll}
              />
            </div>
            <div>
              <label for="mobile">Mobile </label>
              <input
                type="radio"
                id="mobile"
                name="rad"
                onClick={handleClick}
              />
            </div>
            <div>
              <label for="mobile">Laptop </label>
              <input
                type="radio"
                id="laptop"
                name="rad"
                onClick={handleClick}
              />
            </div>
            <div>
              <label for="mobile">PC </label>
              <input type="radio" id="PC" name="rad" onClick={handleClick} />
            </div>
            <div>
              <label for="mobile">Touchpad </label>
              <input
                type="radio"
                id="Touchpad"
                name="rad"
                onClick={handleClick}
              />
            </div>
          </form>
        </div>
      </div>
      <div>
        <ItemContainer />
      </div>
    </div>
  );
}

export default Shop;
