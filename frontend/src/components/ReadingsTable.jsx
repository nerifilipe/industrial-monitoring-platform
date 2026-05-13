import { useMemo, useState } from "react";

const PAGE_SIZE = 10;

function ReadingsTable({ readings }) {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedReadings = useMemo(() => {
    return [...readings].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
  }, [readings]);

  const totalPages = Math.ceil(sortedReadings.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentReadings = sortedReadings.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h2>Sensor Readings History</h2>
          <p>
            Showing {currentReadings.length} of {sortedReadings.length} stored
            telemetry records
          </p>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Value</th>
              <th>Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {currentReadings.map((reading) => (
              <tr key={reading.id}>
                <td>
                  <strong>{reading.sensorName}</strong>
                </td>

                <td>{reading.value.toFixed(2)}</td>

                <td>{new Date(reading.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default ReadingsTable;