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
    description: 'Building a custom tree-sitter grammar and LSP.',
    url: 'https://www.prairielearn.com/about/blog/stylish-mustaches'
  },
  {
    title: "Linting into 'The Pit of Success'",
    date: '11-26-2025',
    description: 'Investing in automated linting and tooling',
    url: 'https://www.prairielearn.com/about/blog/linting-pit-of-success'
  }
];
