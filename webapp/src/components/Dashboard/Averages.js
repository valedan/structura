import React, { useState, useEffect } from "react";
import LabelledCard from "../shared/LabelledCard";
import styled from "styled-components";
import axios from "axios";

const Averages = () => {
  const [count, setCount] = useState();
  const [averages, setAverages] = useState();

  useEffect(() => {
    const loadData = async () => {
      const countResponse = await axios.get("api/count");
      const averagesResponse = await axios.get("api/averages");
      setCount(countResponse.data.data);
      setAverages(averagesResponse.data.data);
    };

    loadData();
  }, []);

  return (
    <Wrapper>
      <LabelledCard label="Count" value={count} />
      {/* There's a tradeoff here between explicitly rendering each card, and dynamically rendering them by looping over the values in averages. The explicit approach used here is more verbose and easily broken by changes in the response structure, but creates a better loading experience for the user because it allows us to display the cards with labels and null values before the data is loaded.  */}
      <LabelledCard
        label="Average Motion Curvature"
        value={averages?.motion_curvature.toFixed(3)}
      />
      <LabelledCard
        label="Average CTF Fit to Å"
        value={averages?.ctf_fit_to_A.toFixed(3)}
      />
      <LabelledCard
        label="Average Pick NCC Median"
        value={averages?.pick_ncc_median.toFixed(3)}
      />
      <LabelledCard
        label="Average Pick Power Median"
        value={averages?.pick_pow_median.toFixed(3)}
      />
      <LabelledCard
        label="Average Number of Picks"
        value={averages?.num_particles.toFixed(3)}
      />
      <LabelledCard
        label="Average Astigmatism"
        value={averages?.df_ast.toFixed(3)}
      />
      <LabelledCard
        label="Average Motion"
        value={averages?.motion_total_pix.toFixed(3)}
      />
    </Wrapper>
  );
};

export default Averages;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
`;
