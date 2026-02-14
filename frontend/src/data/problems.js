export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: [
        "Each input has exactly one solution.",
        "You may not use the same element twice.",
      ],
    },
    examples: [
      { input: "nums=[2,7,11,15], target=9", output: "[0,1]" },
      { input: "nums=[3,2,4], target=6", output: "[1,2]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹"
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  \n}`,
      python: `def twoSum(nums, target):\n    pass`,
      java: `class Solution {\n    public static int[] twoSum(int[] nums, int target) {\n        return new int[0];\n    }\n}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {\n    \n}`,
      c: `int* twoSum(int* nums, int numsSize, int target) {\n    \n}`,
      php: `function twoSum($nums, $target) {\n    \n}`
    },
    expectedOutput: {
      javascript: "[0,1]",
      python: "[0, 1]",
      java: "[0, 1]",
      cpp: "[0, 1]",
      c: "[0, 1]",
      php: "[0, 1]"
    }
  },
  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming • 1D DP",
    description: {
      text: "You are given an integer array coins representing coin denominations and an integer amount representing total amount of money. Return the minimum number of coins needed to make up that amount. If that amount cannot be made up, return -1.",
      notes: [
        "You may assume you have unlimited supply of each coin.",
        "Use bottom-up dynamic programming for optimal performance."
      ],
    },
    examples: [
      { input: "coins=[1,2,5], amount=11", output: "3" },
      { input: "coins=[2], amount=3", output: "-1" }
    ],
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "0 ≤ amount ≤ 10⁴"
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  \n}`,
      python: `def coinChange(coins, amount):\n    pass`,
      java: `class Solution {\n    public static int coinChange(int[] coins, int amount) {\n        return 0;\n    }\n}`,
      cpp: `int coinChange(vector<int>& coins, int amount) {\n    \n}`,
      c: `int coinChange(int* coins, int coinsSize, int amount) {\n    \n}`,
      php: `function coinChange($coins, $amount) {\n    \n}`
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
      c: "3",
      php: "3"
    }
  },
  "longest-increasing-subsequence": {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming • Binary Search",
    description: {
      text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
      notes: [
        "The subsequence does not need to be contiguous.",
        "Optimized solution runs in O(n log n) time."
      ],
    },
    examples: [
      { input: "nums=[10,9,2,5,3,7,101,18]", output: "4" },
      { input: "nums=[0,1,0,3,2,3]", output: "4" }
    ],
    constraints: [
      "1 ≤ nums.length ≤ 2500",
      "-10⁴ ≤ nums[i] ≤ 10⁴"
    ],
    starterCode: {
      javascript: `function lengthOfLIS(nums) {\n  \n}`,
      python: `def lengthOfLIS(nums):\n    pass`,
      java: `class Solution {\n    public static int lengthOfLIS(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `int lengthOfLIS(vector<int>& nums) {\n    \n}`,
      c: `int lengthOfLIS(int* nums, int numsSize) {\n    \n}`,
      php: `function lengthOfLIS($nums) {\n    \n}`
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
      cpp: "4",
      c: "4",
      php: "4"
    }
  },
  "edit-distance": {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming • 2D DP",
    description: {
      text: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      notes: [
        "You can insert, delete, or replace a character.",
        "Use 2D DP table solution."
      ],
    },
    examples: [
      { input: 'word1="horse", word2="ros"', output: "3" },
      { input: 'word1="intention", word2="execution"', output: "5" }
    ],
    constraints: [
      "0 ≤ word1.length, word2.length ≤ 500"
    ],
    starterCode: {
      javascript: `function minDistance(word1, word2) {\n  \n}`,
      python: `def minDistance(word1, word2):\n    pass`,
      java: `class Solution {\n    public static int minDistance(String word1, String word2) {\n        return 0;\n    }\n}`,
      cpp: `int minDistance(string word1, string word2) {\n    \n}`,
      c: `int minDistance(char* word1, char* word2) {\n    \n}`,
      php: `function minDistance($word1, $word2) {\n    \n}`
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
      c: "3",
      php: "3"
    }
  },
"network-delay-time": {
    id: "network-delay-time",
    title: "Network Delay Time",
    difficulty: "Hard",
    category: "Graph • Dijkstra • Shortest Path",
    description: {
      text: "You are given a list of travel times as directed edges times[i] = [u, v, w], where u is the source node, v is the target node, and w is the time it takes for a signal to travel. Given n nodes labeled from 1 to n and a starting node k, return the time it takes for all nodes to receive the signal. If it is impossible for all nodes to receive the signal, return -1.",
      notes: [
        "This is a single-source shortest path problem.",
        "Use Dijkstra’s algorithm with a priority queue."
      ],
    },
    examples: [
      { input: "times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2", output: "2" },
      { input: "times=[[1,2,1]], n=2, k=2", output: "-1" }
    ],
    constraints: [
      "1 ≤ n ≤ 100",
      "1 ≤ times.length ≤ 6000"
    ],
    starterCode: {
      javascript: `function networkDelayTime(times, n, k) {\n  \n}`,
      python: `def networkDelayTime(times, n, k):\n    pass`,
      java: `class Solution {\n    public static int networkDelayTime(int[][] times, int n, int k) {\n        return 0;\n    }\n}`,
      cpp: `int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n    \n}`,
      c: `int networkDelayTime(int** times, int timesSize, int n, int k) {\n    \n}`,
      php: `function networkDelayTime($times, $n, $k) {\n    \n}`
    },
    expectedOutput: {
      javascript: "2",
      python: "2",
      java: "2",
      cpp: "2",
      c: "2",
      php: "2"
    }
  },
"word-ladder": {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    category: "Graph • BFS",
    description: {
      text: "Given beginWord, endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord. Each transformation must change exactly one letter and the transformed word must exist in wordList.",
      notes: [
        "All words have the same length.",
        "This is an unweighted shortest path problem in implicit graph."
      ],
    },
    examples: [
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', output: "5" },
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]', output: "0" }
    ],
    constraints: [
      "1 ≤ wordList.length ≤ 5000",
      "1 ≤ word length ≤ 10"
    ],
    starterCode: {
      javascript: `function ladderLength(beginWord, endWord, wordList) {\n  \n}`,
      python: `def ladderLength(beginWord, endWord, wordList):\n    pass`,
      java: `class Solution {\n    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        return 0;\n    }\n}`,
      cpp: `int ladderLength(string beginWord, string endWord, vector<string>& wordList) {\n    \n}`,
      c: `int ladderLength(char* beginWord, char* endWord, char** wordList, int wordListSize) {\n    \n}`,
      php: `function ladderLength($beginWord, $endWord, $wordList) {\n    \n}`
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
      cpp: "5",
      c: "5",
      php: "5"
    }
  },
"alien-dictionary": {
    id: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "Hard",
    category: "Graph • Topological Sort",
    description: {
      text: "Given a list of words sorted lexicographically according to an unknown alphabet, derive the order of characters in the alien language. Return a valid ordering of characters. If no valid ordering exists, return an empty string.",
      notes: [
        "This problem reduces to building a graph of character precedence.",
        "Use topological sorting to determine valid order."
      ],
    },
    examples: [
      { input: 'words=["wrt","wrf","er","ett","rftt"]', output: '"wertf"' },
      { input: 'words=["z","x","z"]', output: '""' }
    ],
    constraints: [
      "1 ≤ words.length ≤ 100",
      "1 ≤ word length ≤ 100"
    ],
    starterCode: {
      javascript: `function alienOrder(words) {\n  \n}`,
      python: `def alienOrder(words):\n    pass`,
      java: `class Solution {\n    public static String alienOrder(String[] words) {\n        return "";\n    }\n}`,
      cpp: `string alienOrder(vector<string>& words) {\n    \n}`,
      c: `char* alienOrder(char** words, int wordsSize) {\n    \n}`,
      php: `function alienOrder($words) {\n    \n}`
    },
    expectedOutput: {
      javascript: "wertf",
      python: "wertf",
      java: "wertf",
      cpp: "wertf",
      c: "wertf",
      php: "wertf"
    }
  },
"minimum-window-substring": {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "String • Sliding Window",
    description: {
      text: "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If no such substring exists, return an empty string.",
      notes: [
        "Use sliding window with frequency counting.",
        "Time complexity should be O(n)."
      ],
    },
    examples: [
      { input: 's="ADOBECODEBANC", t="ABC"', output: '"BANC"' },
      { input: 's="a", t="aa"', output: '""' }
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 10⁵"
    ],
    starterCode: {
      javascript: `function minWindow(s, t) {\n  \n}`,
      python: `def minWindow(s, t):\n    pass`,
      java: `class Solution {\n    public static String minWindow(String s, String t) {\n        return "";\n    }\n}`,
      cpp: `string minWindow(string s, string t) {\n    \n}`,
      c: `char* minWindow(char* s, char* t) {\n    \n}`,
      php: `function minWindow($s, $t) {\n    \n}`
    },
    expectedOutput: {
      javascript: "BANC",
      python: "BANC",
      java: "BANC",
      cpp: "BANC",
      c: "BANC",
      php: "BANC"
    }
  },
"regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. '.' matches any single character. '*' matches zero or more of the preceding element. The matching should cover the entire input string.",
      notes: [
        "Use 2D dynamic programming.",
        "This is not built-in regex usage."
      ],
    },
    examples: [
      { input: 's="aa", p="a"', output: "false" },
      { input: 's="aa", p="a*"', output: "true" },
      { input: 's="ab", p=".*"', output: "true" }
    ],
    constraints: [
      "1 ≤ s.length ≤ 20",
      "1 ≤ p.length ≤ 30"
    ],
    starterCode: {
      javascript: `function isMatch(s, p) {\n  \n}`,
      python: `def isMatch(s, p):\n    pass`,
      java: `class Solution {\n    public static boolean isMatch(String s, String p) {\n        return false;\n    }\n}`,
      cpp: `bool isMatch(string s, string p) {\n    \n}`,
      c: `bool isMatch(char* s, char* p) {\n    \n}`,
      php: `function isMatch($s, $p) {\n    \n}`
    },
    expectedOutput: {
      javascript: "false",
      python: "false",
      java: "false",
      cpp: "false",
      c: "false",
      php: "false"
    }
  },
"palindrome-partitioning-ii": {
    id: "palindrome-partitioning-ii",
    title: "Palindrome Partitioning II",
    difficulty: "Hard",
    category: "String • Dynamic Programming",
    description: {
      text: "Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum number of cuts needed for a palindrome partitioning of s.",
      notes: [
        "Precompute palindrome substrings.",
        "Use DP to calculate minimum cuts."
      ],
    },
    examples: [
      { input: 's="aab"', output: "1" },
      { input: 's="a"', output: "0" }
    ],
    constraints: [
      "1 ≤ s.length ≤ 2000"
    ],
    starterCode: {
      javascript: `function minCut(s) {\n  \n}`,
      python: `def minCut(s):\n    pass`,
      java: `class Solution {\n    public static int minCut(String s) {\n        return 0;\n    }\n}`,
      cpp: `int minCut(string s) {\n    \n}`,
      c: `int minCut(char* s) {\n    \n}`,
      php: `function minCut($s) {\n    \n}`
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
      cpp: "1",
      c: "1",
      php: "1"
    }
  },
"word-search-ii": {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    category: "Trie • DFS • Backtracking",
    description: {
      text: "Given a 2D board and a list of words, return all words that can be formed by sequentially adjacent letters on the board.",
      notes: [
        "Use Trie to efficiently match prefixes.",
        "Each letter cell may not be used more than once per word."
      ],
    },
    examples: [
      { input: 'board=[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words=["oath","pea","eat","rain"]', output: '["eat","oath"]' }
    ],
    constraints: [
      "1 ≤ words.length ≤ 3 * 10⁴",
      "1 ≤ board.length, board[0].length ≤ 12"
    ],
    starterCode: {
      javascript: `function findWords(board, words) {\n  \n}`,
      python: `def findWords(board, words):\n    pass`,
      java: `class Solution {\n    public static List<String> findWords(char[][] board, String[] words) {\n        return new ArrayList<>();\n    }\n}`,
      cpp: `vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {\n    \n}`,
      c: `// Implement findWords using Trie + DFS`,
      php: `function findWords($board, $words) {\n    \n}`
    },
    expectedOutput: {
      javascript: '["eat","oath"]',
      python: "['eat', 'oath']",
      java: "[eat, oath]",
      cpp: "[eat, oath]",
      c: "[eat, oath]",
      php: "[eat, oath]"
    }
  },
"replace-words": {
    id: "replace-words",
    title: "Replace Words",
    difficulty: "Medium",
    category: "Trie • String",
    description: {
      text: "Given a dictionary of root words and a sentence, replace all words in the sentence with the shortest root word that is a prefix of it.",
      notes: [
        "If multiple roots match, choose the shortest.",
        "Use Trie for efficient prefix matching."
      ],
    },
    examples: [
      { input: 'dictionary=["cat","bat","rat"], sentence="the cattle was rattled by the battery"', output: '"the cat was rat by the bat"' }
    ],
    constraints: [
      "1 ≤ dictionary.length ≤ 1000",
      "1 ≤ sentence.length ≤ 10⁵"
    ],
    starterCode: {
      javascript: `function replaceWords(dictionary, sentence) {\n  \n}`,
      python: `def replaceWords(dictionary, sentence):\n    pass`,
      java: `class Solution {\n    public static String replaceWords(List<String> dictionary, String sentence) {\n        return "";\n    }\n}`,
      cpp: `string replaceWords(vector<string>& dictionary, string sentence) {\n    \n}`,
      c: `// Implement replaceWords using Trie`,
      php: `function replaceWords($dictionary, $sentence) {\n    \n}`
    },
    expectedOutput: {
      javascript: "the cat was rat by the bat",
      python: "the cat was rat by the bat",
      java: "the cat was rat by the bat",
      cpp: "the cat was rat by the bat",
      c: "the cat was rat by the bat",
      php: "the cat was rat by the bat"
    }
  },
"partition-to-k-equal-sum-subsets": {
    id: "partition-to-k-equal-sum-subsets",
    title: "Partition to K Equal Sum Subsets",
    difficulty: "Hard",
    category: "Bitmask • Backtracking • DP",
    description: {
      text: "Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.",
      notes: [
        "Total sum must be divisible by k.",
        "Use bitmask DP or backtracking with pruning."
      ],
    },
    examples: [
      { input: "nums=[4,3,2,3,5,2,1], k=4", output: "true" },
      { input: "nums=[1,2,3,4], k=3", output: "false" }
    ],
    constraints: [
      "1 ≤ nums.length ≤ 16"
    ],
    starterCode: {
      javascript: `function canPartitionKSubsets(nums, k) {\n  \n}`,
      python: `def canPartitionKSubsets(nums, k):\n    pass`,
      java: `class Solution {\n    public static boolean canPartitionKSubsets(int[] nums, int k) {\n        return false;\n    }\n}`,
      cpp: `bool canPartitionKSubsets(vector<int>& nums, int k) {\n    \n}`,
      c: `bool canPartitionKSubsets(int* nums, int numsSize, int k) {\n    \n}`,
      php: `function canPartitionKSubsets($nums, $k) {\n    \n}`
    },
    expectedOutput: {
      javascript: "true",
      python: "true",
      java: "true",
      cpp: "true",
      c: "true",
      php: "true"
    }
  },
"maximum-students-taking-exam": {
    id: "maximum-students-taking-exam",
    title: "Maximum Students Taking Exam",
    difficulty: "Hard",
    category: "Bitmask • Dynamic Programming",
    description: {
      text: "Given a classroom represented by a grid where '.' represents an empty seat and '#' represents a broken seat, return the maximum number of students that can take the exam without cheating. Students cannot sit adjacent horizontally or diagonally.",
      notes: [
        "Use bitmask DP row by row.",
        "Check for valid seat configurations."
      ],
    },
    examples: [
      { input: 'seats=[["#",".","#","#",".","#"],[".","#","#","#","#","."],["#",".","#","#",".","#"]]', output: "4" }
    ],
    constraints: [
      "1 ≤ rows ≤ 8",
      "1 ≤ cols ≤ 8"
    ],
    starterCode: {
      javascript: `function maxStudents(seats) {\n  \n}`,
      python: `def maxStudents(seats):\n    pass`,
      java: `class Solution {\n    public static int maxStudents(char[][] seats) {\n        return 0;\n    }\n}`,
      cpp: `int maxStudents(vector<vector<char>>& seats) {\n    \n}`,
      c: `int maxStudents(char** seats, int rows, int cols) {\n    \n}`,
      php: `function maxStudents($seats) {\n    \n}`
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
      cpp: "4",
      c: "4",
      php: "4"
    }
  },
"largest-rectangle-in-histogram": {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Stack • Monotonic Stack",
    description: {
      text: "Given an array of integers heights representing the height of bars in a histogram, return the area of the largest rectangle that can be formed within the histogram.",
      notes: [
        "Use a monotonic increasing stack.",
        "Time complexity should be O(n)."
      ],
    },
    examples: [
      { input: "heights=[2,1,5,6,2,3]", output: "10" },
      { input: "heights=[2,4]", output: "4" }
    ],
    constraints: [
      "1 ≤ heights.length ≤ 10⁵",
      "0 ≤ heights[i] ≤ 10⁴"
    ],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {\n  \n}`,
      python: `def largestRectangleArea(heights):\n    pass`,
      java: `class Solution {\n    public static int largestRectangleArea(int[] heights) {\n        return 0;\n    }\n}`,
      cpp: `int largestRectangleArea(vector<int>& heights) {\n    \n}`,
      c: `int largestRectangleArea(int* heights, int heightsSize) {\n    \n}`,
      php: `function largestRectangleArea($heights) {\n    \n}`
    },
    expectedOutput: {
      javascript: "10",
      python: "10",
      java: "10",
      cpp: "10",
      c: "10",
      php: "10"
    }
  },
"trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Stack • Two Pointers",
    description: {
      text: "Given n non-negative integers representing elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [
        "Can be solved using monotonic stack.",
        "Two pointer solution also exists."
      ],
    },
    examples: [
      { input: "height=[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height=[4,2,0,3,2,5]", output: "9" }
    ],
    constraints: [
      "1 ≤ height.length ≤ 2 * 10⁴"
    ],
    starterCode: {
      javascript: `function trap(height) {\n  \n}`,
      python: `def trap(height):\n    pass`,
      java: `class Solution {\n    public static int trap(int[] height) {\n        return 0;\n    }\n}`,
      cpp: `int trap(vector<int>& height) {\n    \n}`,
      c: `int trap(int* height, int heightSize) {\n    \n}`,
      php: `function trap($height) {\n    \n}`
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
      cpp: "6",
      c: "6",
      php: "6"
    }
  },
"remove-k-digits": {
    id: "remove-k-digits",
    title: "Remove K Digits",
    difficulty: "Hard",
    category: "Stack • Greedy",
    description: {
      text: "Given a non-negative integer num represented as a string and an integer k, remove k digits from the number so that the new number is the smallest possible.",
      notes: [
        "Use a monotonic increasing stack.",
        "Handle leading zeros carefully."
      ],
    },
    examples: [
      { input: 'num="1432219", k=3', output: '"1219"' },
      { input: 'num="10200", k=1', output: '"200"' }
    ],
    constraints: [
      "1 ≤ num.length ≤ 10⁵",
      "num consists only of digits"
    ],
    starterCode: {
      javascript: `function removeKdigits(num, k) {\n  \n}`,
      python: `def removeKdigits(num, k):\n    pass`,
      java: `class Solution {\n    public static String removeKdigits(String num, int k) {\n        return "";\n    }\n}`,
      cpp: `string removeKdigits(string num, int k) {\n    \n}`,
      c: `char* removeKdigits(char* num, int k) {\n    \n}`,
      php: `function removeKdigits($num, $k) {\n    \n}`
    },
    expectedOutput: {
      javascript: "1219",
      python: "1219",
      java: "1219",
      cpp: "1219",
      c: "1219",
      php: "1219"
    }
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Reverse the input character array in-place.",
      notes: ["O(1) extra space required."]
    },
    examples: [
      { input: `["h","e","l","l","o"]`, output: `["o","l","l","e","h"]` }
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      javascript: `function reverseString(s) {\n  \n}`,
      python: `def reverseString(s):\n    pass`,
      java: `class Solution {\n    public static void reverseString(char[] s) {\n        \n    }\n}`,
      cpp: `void reverseString(vector<char>& s) {\n    \n}`,
      c: `void reverseString(char* s, int size) {\n    \n}`,
      php: `function reverseString(&$s) {\n    \n}`
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]',
      python: '["o","l","l","e","h"]',
      java: '["o","l","l","e","h"]',
      cpp: '["o","l","l","e","h"]',
      c: '["o","l","l","e","h"]',
      php: '["o","l","l","e","h"]'
    }
  },
  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Return true if string is palindrome after removing non-alphanumeric characters.",
      notes: []
    },
    examples: [
      { input: `"A man, a plan, a canal: Panama"`, output: "true" }
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵"],
    starterCode: {
      javascript: `function isPalindrome(s) {\n  \n}`,
      python: `def isPalindrome(s):\n    pass`,
      java: `class Solution {\n    public static boolean isPalindrome(String s) {\n        return false;\n    }\n}`,
      cpp: `bool isPalindrome(string s) {\n    \n}`,
      c: `int isPalindrome(char* s) {\n    \n}`,
      php: `function isPalindrome($s) {\n    \n}`
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
      c: "1",
      php: "true"
    }
  },
  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Find contiguous subarray with largest sum.",
      notes: ["Use Kadane's algorithm."]
    },
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  \n}`,
      python: `def maxSubArray(nums):\n    pass`,
      java: `class Solution {\n    public static int maxSubArray(int[] nums) {\n        return 0;\n    }\n}`,
      cpp: `int maxSubArray(vector<int>& nums) {\n    \n}`,
      c: `int maxSubArray(int* nums, int size) {\n    \n}`,
      php: `function maxSubArray($nums) {\n    \n}`
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
      cpp: "6",
      c: "6",
      php: "6"
    }
  },
  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    description: {
      text: "Find maximum water container area.",
      notes: []
    },
    examples: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" }
    ],
    constraints: ["2 ≤ n ≤ 10⁵"],
    starterCode: {
      javascript: `function maxArea(height) {\n  \n}`,
      python: `def maxArea(height):\n    pass`,
      java: `class Solution {\n    public static int maxArea(int[] height) {\n        return 0;\n    }\n}`,
      cpp: `int maxArea(vector<int>& height) {\n    \n}`,
      c: `int maxArea(int* height, int size) {\n    \n}`,
      php: `function maxArea($height) {\n    \n}`
    },
    expectedOutput: {
      javascript: "49",
      python: "49",
      java: "49",
      cpp: "49",
      c: "49",
      php: "49"
    }
  }
};
export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
  php: {
    name: "PHP",
    icon: "/php.png",
    monacoLang: "php",
  },
};