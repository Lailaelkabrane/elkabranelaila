import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import { studies, internships } from "@/data/portfolio";

export default function Experience() {
  return (
    <>
      <PageHeader title="Journey" subtitle="Education and internships" />
      <div className="grid">
        <Card className="s6" title="Studies">
          <Timeline items={studies} />
        </Card>
        <Card className="s6" title="Internships">
          <Timeline items={internships} />
        </Card>
      </div>
    </>
  );
}
