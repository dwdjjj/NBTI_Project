import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function NextBtn({ score, criteria, choice1, choice2, num }) {
  // if (sum > criteria) {
  //   num = 1; id가 1인질문 switch로 띄워보려했는데 num을 못올려줌
  // } else num = 2;

  return score >= criteria ? (
    <Button>
      <Link href={choice1} underline="none">
        다음 페이지로
      </Link>
    </Button>
  ) : (
    <Link href={choice2} underline="none">
      <Button>다음 페이지로</Button>
    </Link>
  );
}

export default NextBtn;
