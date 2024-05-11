let countNumber = 10;

let countDecrease = (countno) => {
  document.querySelector("p").innerHTML =
    countno >= 1 ? `CountDown:  ${countno}` : countno;
  if (countno == `Happy Independence Day`) {
    const imgTag = document.createElement("img");
    imgTag.src = `india.gif`;
    imgTag.alt = `Indian Flag`;
    imgTag.style.display = "block";
    imgTag.style.margin = "0 auto";
    document.body.appendChild(imgTag);
  }
};

setTimeout(() => {
  countDecrease(countNumber--);
  setTimeout(() => {
    countDecrease(countNumber--);
    setTimeout(() => {
      countDecrease(countNumber--);
      setTimeout(() => {
        countDecrease(countNumber--);
        setTimeout(() => {
          countDecrease(countNumber--);
          setTimeout(() => {
            countDecrease(countNumber--);
            setTimeout(() => {
              countDecrease(countNumber--);
              setTimeout(() => {
                countDecrease(countNumber--);
                setTimeout(() => {
                  countDecrease(countNumber--);
                  setTimeout(() => {
                    countDecrease(countNumber--);
                    setTimeout(() => {
                      countDecrease(`Happy Independence Day`);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
