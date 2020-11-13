import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div style={{ fontSize: "30px", color: "green" }}>
          1- meta utf-8 : بتساعد البراوزر انه يفهم كل اللغات 
          <br />
          2- meta viewport : بتساعد موقعك علي انه يبقي متجاوب مع كل الشاشات
          <br />
          3- Title : بيساعدك علي تغيير عنوان موقعك 
          <br />
          4- link relation : بيساعدك علي انك تعمل ربط بين صفحة الاندكس وصفحة الاستايل
          <br />
          5- Script : افضل مكان لوضع الاسكريبت اخر حاجة قبل قفلة جسم الصفحة
          <br />
          6- div : هو عبارة عن عنصر بلوك تقر توضع جواه اي عنصر بالمختصر هو حاوية 
          <br />
          7- h1 - h6 : العنوان الذي لا غني عنه في موقعك بيقل تدريجيا من 1 ل 6 
          <br />
          8- P : البراجراف وهو عنصر بلوك 
          <br />
          9- Image : الصورة وهي عنصر انلين
        </div>
        <div style={{ color: "blue" }}>

        </div>
        <img
          width="100%"
          src="https://honglytech.com/wp-content/uploads/2020/06/laptop-coffee-arm-1205256.jpg"
        />
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className="btn btn-primary">Print this out!</button>
    </div>
  );
};

export default Example;