import { useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemPage() {
  const [sortOrder, setSortOrder] = useState("asc");

  const difficultyRank = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  const problems = Object.values(PROBLEMS);

  const sortedProblems = [...problems].sort((a, b) => {
    if (sortOrder === "asc") {
      return difficultyRank[a.difficulty] - difficultyRank[b.difficulty];
    } else {
      return difficultyRank[b.difficulty] - difficultyRank[a.difficulty];
    }
  });

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
            <p className="text-base-content/70">
              Sharpen your coding skills with these curated problems
            </p>
          </div>

          {/* SORT DROPDOWN */}
          <div>
            <select
              className="select select-bordered rounded-full"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Sort: Easy → Hard</option>
              <option value="desc">Sort: Hard → Easy</option>
            </select>
          </div>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-6">
          {sortedProblems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-100 rounded-3xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">

                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">

                      <div className="size-14 rounded-3xl bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                        <Code2Icon className="size-7 text-primary" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-xl font-bold">
                            {problem.title}
                          </h2>

                          <span
                            className={`badge badge-sm rounded-full ${getDifficultyBadgeClass(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                        </div>

                        <p className="text-sm text-base-content/60">
                          {problem.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-base-content/80">
                      {problem.description.text}
                    </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-2 font-medium text-base-content/70 hover:text-primary transition-colors duration-300 group">
                    <span>Solve</span>
                    <ChevronRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-12 card bg-base-100 rounded-3xl shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">

              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">
                  {problems.length}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">
                  {easyProblemsCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">
                  {mediumProblemsCount}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">
                  {hardProblemsCount}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProblemPage;
