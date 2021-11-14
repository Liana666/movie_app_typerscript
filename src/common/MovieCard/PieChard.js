import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

import styled from "styled-components";



const PieChard = (props) => {

    // const unvote = 10 - props.vote;

    const data = [
        { name: "Group A", value: 10 - props.vote },
        { name: "Group B", value: props.vote },
    ];


    const COLORS = ["#1E273A", '#00000038'];
    return (
        <PieChart width={120} height={120} >
            <Pie
                data={data}
                innerRadius={24}
                outerRadius={29}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}

            </Pie>

        </PieChart >
    );
}


export default PieChard;