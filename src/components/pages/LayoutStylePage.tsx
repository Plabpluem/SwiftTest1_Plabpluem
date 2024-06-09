import { Suspense} from "react";
import LayoutAndStyle from "../LayoutandStyle/LayoutAndStyle";
import Loading from "../Loading";



const LayoutStylePage: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
        <LayoutAndStyle />
    </Suspense>
  );
};

export default LayoutStylePage;
