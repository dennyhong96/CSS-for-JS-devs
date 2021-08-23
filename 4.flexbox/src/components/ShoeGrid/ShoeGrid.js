import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
	return (
		<Wrapper>
			{SHOES.map((shoe) => (
				<ShoeWrapper key={shoe.slug}>
					<ShoeCard {...shoe} />
				</ShoeWrapper>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 62px;
	column-gap: 36px;
`;

const ShoeWrapper = styled.div`
	min-width: 275px;
	max-width: 450px;
	flex: 1;
`;

export default ShoeGrid;