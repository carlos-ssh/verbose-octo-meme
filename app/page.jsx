import MainSectionComponent from '@/components/main/MainSectionComponent'
import FeaturesSectionComponent from '@/components/main/FeaturesSectionComponent'
import PricingSectionComponent from '@/components/main/PricingSectionComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <MainSectionComponent />
        <FeaturesSectionComponent />
        <PricingSectionComponent />
    </main>
  )
}
