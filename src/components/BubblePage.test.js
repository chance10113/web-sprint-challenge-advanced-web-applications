import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";
import Bubbles from "./Bubbles";

const mockData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd",
    },
    id: 5,
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba",
    },
    id: 6,
  },
  {
    color: "bisque",
    code: {
      hex: "#dd9a99",
    },
    id: 7,
  },
  {
    color: "softyellow",
    code: {
      hex: "#dcdd99",
    },
    id: 8,
  },
  {
    color: "blanchedalmond",
    code: {
      hex: "#ffebcd",
    },
    id: 9,
  },
  {
    color: "blue",
    code: {
      hex: "#6093ca",
    },
    id: 10,
  },
  {
    color: "blueviolet",
    code: {
      hex: "#8a2be2",
    },
    id: 11,
  },
];

test("Renders BubblePage without errors", async () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<ColorList colors={mockData} />);
  render(<Bubbles colors={mockData} />);

  const color = await screen.findByText(/aqua/i);
  const secondColor = await screen.findByText(/blanchedalmond/i);
  const bubblesOnScreen = await screen.findByTestId(/bubbletest/i);

  expect(color).toBeInTheDocument();
  expect(secondColor).toBeInTheDocument();
  expect(bubblesOnScreen).toBeInTheDocument();
});
