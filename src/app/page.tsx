import CommandPanel from "@/components/CommandPanel";
import SideBar from "@/components/SideBar";
import MainContentContainer from "@/components/MainContentContainer";
import SideBarContainer from "@/components/SideBarContainer";
import DashboardContainer from "@/components/DashboardContainer";
import DashboardSectionContainer from "@/components/DashboardSectionContainer";
import TaskBoard from "@/components/TaskBoard";

export default function Home() {
  return (
    <div className="p-6 flex w-full">
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
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
