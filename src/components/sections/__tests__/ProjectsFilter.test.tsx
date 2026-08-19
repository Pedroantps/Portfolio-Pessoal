import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ProjectsFilter } from "../ProjectsFilter";

describe("ProjectsFilter Component", () => {
  it("renders correctly with all categories", () => {
    const onCategoryChange = vi.fn();
    render(<ProjectsFilter currentCategory="all" onCategoryChange={onCategoryChange} />);

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Front-end")).toBeInTheDocument();
    expect(screen.getByText("Full Stack")).toBeInTheDocument();
    expect(screen.getByText("Mobile / IoT")).toBeInTheDocument();
  });

  it("calls onCategoryChange when a category is clicked", () => {
    const onCategoryChange = vi.fn();
    render(<ProjectsFilter currentCategory="all" onCategoryChange={onCategoryChange} />);

    const frontendButton = screen.getByText("Front-end");
    fireEvent.click(frontendButton);

    expect(onCategoryChange).toHaveBeenCalledWith("frontend");
  });
});
