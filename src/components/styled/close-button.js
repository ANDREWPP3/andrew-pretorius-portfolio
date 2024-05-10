import { RxCrossCircled } from "react-icons/rx";
import styled from "styled-components";
import { THEME } from "../../const/themes";

export const CloseButton = styled(RxCrossCircled)`
    cursor : pointer;
    color : ${(props) => THEME(props.theme).ACCENT}

`