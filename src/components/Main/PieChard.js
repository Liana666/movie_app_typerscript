import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

import styled from "styled-components";

const data = [
    { name: "Group A", value: 22 },
    { name: "Group B", value: 78 },
];


const COLORS = ["#1E273A", '#00000038'];

const PieChard = () => {
    return (
        <PieChart width={95} height={95} >
            <Pie
                data={data}
                innerRadius={23}
                outerRadius={27}
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