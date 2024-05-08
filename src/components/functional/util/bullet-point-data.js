import React from 'react';
import { BulletItem } from '../../styled/bullet-item';
import { BulletContainer } from '../../styled/bull-container';

export default function BulletPointData({theme,data}){

    if(!data)
        return null;
    let bulletPoints = [];
    for(let i=0;i<data.length;i++){
        bulletPoints.push(
            <BulletItem key={data[i]+"_"+i}>{data[i]}</BulletItem>
        )
    }

    return (
        <BulletContainer>
            {bulletPoints}
        </BulletContainer>
    )
}