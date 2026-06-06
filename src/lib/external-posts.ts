export interface ExternalPost {
  title: string;
  date: string;
  description: string;
  url: string;
}

export const externalPosts: ExternalPost[] = [
  {
    title: 'Stylish mustaches',
    date: '2-25-2026',
    description:
      'Building a custom tree-sitter grammar to lint, format, and syntax-highlight HTML+Mustache templates in PrairieLearn — which caught bugs in 7 elements across the codebase.',
    url: 'https://www.prairielearn.com/about/blog/stylish-mustaches'
  },
  {
    title: "Linting into 'The Pit of Success'",
    date: '11-26-2025',
    description:
      'How PrairieLearn shifted code-quality enforcement from manual review to automated linting and tooling across Python, TypeScript, SQL, and more.',
    url: 'https://www.prairielearn.com/about/blog/linting-pit-of-success'
  }
];
