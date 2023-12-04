import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie1 = () => {
  return (
    <>
      {jobCatContent.map((item) => (
        <div
          className="category-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <h4>
                <Link href="/job-list-v1">{item.catTitle}</Link>
              </h4>
              <p>({item.jobNumber} актуальных публикации)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie1;
