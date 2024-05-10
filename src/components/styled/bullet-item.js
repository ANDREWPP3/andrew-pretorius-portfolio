import styled from "styled-components";
import { SIZE } from "../../const/sizes";

export const BulletItem = styled.li`
    text-align : left;
    margin-top : ${(props) => props.nomargintop===true ? undefined : SIZE.SPACING.MD};
`