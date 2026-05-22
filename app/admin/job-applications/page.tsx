"use client";

import { useEffect, useState } from "react";
import { Mail, FileText, Trash2, ExternalLink } from "lucide-react";
import axiosInstance from "@/service/admin/axios";

interface JobApplication {
  _id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  cvUrl: string;
  createdAt: string;
  updatedAt: string;
}

export default function JobApplicationsPage() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplications = async () => {
    try {
      const res = await axiosInstance.get<JobApplication[]>(
        "/careers/job-applications"
      );

      setApplications(res.data || []);
    } catch (error) {
      console.error("Failed to fetch job applications:", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/job-applications/${id}`);

      setApplications((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete application");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="h-10 w-10 rounded-full border-b-2 border-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Job Applications
        </h1>

        <p className="text-gray-500">
          Manage candidate job applications.
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          
          <table className="w-full border-collapse">
            
            {/* TABLE HEAD */}
            <thead>
              <tr className="bg-gray-50 border-b">
                
                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Applicant
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Job Title
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  CV
                </th>

                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>

            
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {applications.length > 0 ? (
                applications.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    
                    {/* APPLICANT NAME */}
                    <td className="p-4">
                      <div className="font-medium text-gray-800">
                        {item.applicantName}
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={14} />
                        {item.applicantEmail}
                      </div>
                    </td>

                    {/* JOB TITLE */}
                    <td className="p-4 text-sm text-gray-700">
                      {item.jobTitle}
                    </td>

                    {/* CV */}
                    <td className="p-4">
                      <a
                        href={item.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <FileText size={16} />
                        View CV
                        <ExternalLink size={14} />
                      </a>
                    </td>

                    {/* DATE */}
                    <td className="p-4 text-sm text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                    {/* ACTIONS */}
                    {/* <td className="p-4">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="p-10 text-center text-gray-500 italic"
                  >
                    No job applications found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}