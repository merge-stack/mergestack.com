import React from 'react';
import { useRouter } from 'next/router';
import JobDetail from 'src/components/career/jobs/JobDetail';

const JobDetailPage: React.FC = () => {
  const router = useRouter();
  const { jobId } = router.query;

  console.log('jobId:', jobId);
  return <JobDetail jobId={jobId as string} />;
};

export default JobDetailPage;
