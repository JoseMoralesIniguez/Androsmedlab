export interface BlogPost {
  id: string;
  title: string;
  status: 'Published' | 'Draft';
  date: string;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  icon: string;
}
