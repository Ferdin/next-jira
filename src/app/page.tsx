import CommandPanel from "@/components/CommandPanel";
import MainContentContainer from "@/components/MainContentContainer";
import DashboardContainer from "@/components/DashboardContainer";
import DashboardSectionContainer from "@/components/DashboardSectionContainer";
import TaskBoard from "@/components/TaskBoard";

export default function Home() {
  return (
    <div className="flex w-full pl-56 pr-56 pt-16 pb-16">
      <MainContentContainer>
        <CommandPanel />
        <DashboardContainer>
          <DashboardSectionContainer>
            <TaskBoard taskType="To do" />
          </DashboardSectionContainer>
          <DashboardSectionContainer>
            <TaskBoard taskType="In Progress" />
          </DashboardSectionContainer>
          <DashboardSectionContainer>
            <TaskBoard taskType="Completed" />
          </DashboardSectionContainer>
        </DashboardContainer>
      </MainContentContainer>
    </div>
  );
}
