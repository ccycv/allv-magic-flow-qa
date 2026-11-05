# Allv Magic flow QA

Public, disposable fixture for testing reviewed task handoffs, independent reviews,
and split/repeated work across Mac and Linux connectors. It contains invented
build events only. This is not an Allv application or customer repository.

Run `npm test` with Node 22 or later. Agents work in isolated checkouts; tests must
not modify the source checkout, publish packages, or use any real customer data.
